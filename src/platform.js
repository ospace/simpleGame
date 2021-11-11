GameWorld.Entity("Platform", {
    created: function (props) {
      this.bar = 100;
      var self = this;
      var gold = 20;
      var life = 10;
      this.metaItems = {
        wall: {
          price: 2,
          create: function (idx) {
            return self.newWall(idx, 1);
          },
        },
        canon: {
          price: 3,
          create: function (idx) {
            return self.newCanon(idx);
          },
        },
      };
      this.pointer = GameWorld.Pointer;
      this.grid = props.grid;
      this.status = props.status;
      this.status.setGold(gold);
      this.status.setLife(life);
      this.entry = findAll(function (it) {
        return it === "2";
      }).reduce(function (prev, it) {
        prev.push({ x: 0, y: it.y << 1 });
        prev.push({ x: 0, y: (it.y << 1) + 1 });
        return prev;
      }, [])
      this.exits = findAll(function (it) {
        return it === "3";
      }).reduce(function (prev, it) {
        prev.push({ x: (it.x << 1) + 1, y: it.y << 1 });
        prev.push({ x: (it.x << 1) + 1, y: (it.y << 1) + 1 });
        return prev;
      }, []);
      this.grid.setExits(this.exits);
      var height = wallMeta.length;
      var width = wallMeta[0] ? wallMeta[0].length : 0;
      var tickWidth = width << 1;
      let cates = { 1: 1, 2: 2, 3: 3, 8: 0 };
      for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
          let cate = cates[wallMeta[y].charAt(x)];
          if (undefined === cate) continue;
          var gridIdx = (x + y * tickWidth) << 1;
          this.newWall(gridIdx, cate);
        }
      }
      this.enermies = [];
      GameWorld.on("enermyDeleted", this.onEnermyDeleted.bind(this));
      GameWorld.on("enermyDestroyed", this.onEnermyDestroyed.bind(this));
      
    },
    onClick: function (gridIdx) {
      if (this.selected) {
        this.selected.selected = false;
        GameWorld.emit('wallup', this.selected);
      }
      var item = this.grid.getItem(gridIdx);
      if (!item && g_currentItem) {
        var metaInfo = this.metaItems[g_currentItem];
        var price = this.status.withdraw(metaInfo.price);
        if (0 < price) {
          item = metaInfo.create(gridIdx);
          if (this.searchable()) {
            this.enermies.forEach(function (it) { it.updateRoute(); });
          } else {
            this.removeItem(item);
            item = null;
            this.status.deposit(price);
          }
        }
      }
      this.selected = (item && ('wall' !== item.type || 1 === item.cate)) ? item : null;
      //this.selected = item;
      if (this.selected) {
        this.selected.selected = true;
        GameWorld.emit('walldown', this.selected);
      }
    },
    onEnermyDeleted: function (obj) {
      var enermy = obj.detail;
      this.removeEnermy(enermy);
    },
    onEnermyDestroyed: function (obj) {
      var enermy = obj.detail;
      var price = enermy.price;
      0 < price && this.status.deposit(price);
      this.onEnermyDeleted(obj);
    },
    removeEnermy: function (obj) {
      if (!obj) return;
      var idx = this.enermies.indexOf(obj);
      ~idx && this.enermies.splice(idx, 1);
      obj.delete();
    },
    nextWave: function () {
      var idx = Math.floor(Math.random() * this.entry.length);
      var entry = this.entry[idx];
      this.newEnermy(this.grid.grid2real(entry));
    },
    newEnermy: function (pt) {
      var ret = new GameWorld.Entity.Enermy({ pt: pt, size: this.gridSize, width: this.gridSize, height: this.gridSize, grid: this.grid });
      this.enermies.push(ret);
      return ret;
    },
    newWall: function (idx, cate) {
      var pt = this.grid.index2real(idx);
      var ret = new GameWorld.Entity.Wall({ pt: pt, size: tileSize, idx: idx, cate: cate });
      this.grid.pushItem(idx, ret);
      return ret;
    },
    newCanon: function (idx) {
      var pt = this.grid.index2real(idx);
      var ret = new GameWorld.Entity.Canon({ pt: pt, size: tileSize, idx: idx,  getTarget: this.createGetTarget(pt)});
      this.grid.pushItem(idx, ret);
      return ret;
    },
    createGetTarget: function (pt) {
      var enermies = this.enermies;
      return function() {
        if (!enermies.length) return;
        var item = enermies[0];
        var len = Math.pow(pt.x-item.pt.x, 2) + Math.pow(pt.y-item.pt.y, 2);
        var ret = item;
        for(var i=1, n=enermies.length; i < n; ++i) {
          item = enermies[i];
          var l = Math.pow(pt.x-item.pt.x, 2) + Math.pow(pt.y-item.pt.y, 2);
          if (l >= len) continue;
          len = l;
          ret = item;
        }
        return {len: Math.sqrt(len), obj: ret};
      };
    },
    sell: function () {
      if (!this.selected) return;
      var sellCost = this.selected.sell();
      sellCost && this.status.deposit(sellCost);
      this.removeItem(this.selected);
      this.selected = null;
    },
    upgrade: function () {
      if (!this.selected) return;
      this.selected.upgrade();
      // upgrade 비용처리
    },
    update: function (dt) {
      if (!this.pointer) return;
      if (this.pointer.pos) {
        let gridIdx = this.grid.real2index(this.pointer.pos);
        if (g_currentItem) {
          this.hover = this.grid.index2real(gridIdx);
          this.hover.disabled = !!this.grid.getItem(gridIdx);
        } else {
          this.hover = null;
        }
        if (this.pointer.click) {
          this.pointer.click = false;
          this.onClick(gridIdx);
        }
      } else {
        this.hover = null;
      }
    },
    removeItem: function (item) {
      if (!item) return;
      this.grid && 0 <= item.idx && this.grid.removeItem(item.idx);
      item.delete();
    },
    searchable: function () {
      var ret = this.grid.search(this.entry[0]);
      return ret && ret.length;
    },
    paint: function (ctx) {
      this.hover &&
        GameUtils.rect(ctx, this.hover, tileSize, tileSize, {
          strokeStyle: this.hover.disabled ? "red" : "green",
        });
      this.selected &&
        GameUtils.rect(ctx, this.selected.pt, tileSize, tileSize, {
          strokeStyle: "black",
          lineWidth: 2,
        });
    },
  }, { layer: 5 });