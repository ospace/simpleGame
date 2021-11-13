GameWorld.Entity(
    "Enermy",
    {
      // speed: 50,
      speed: 200,
      created: function (props) {
        this.pt = props.pt;
        this.width =  props.width;
        this.height = props.height;
        this.size = props.size;
        this.half = props.size / 2;
        this.toPt = null;
        this.life = 5;
        this.price = 1;
        this.updateRoute();
      },
      // destoryed: function() {
      //   console.log('> enermy destoryed');
      // },
      move: function (from, to, len) {
        let dl = to - from;
        return 1 > Math.abs(dl) ? to : 0 < dl ? from + len : from - len;
      },
      center: function() {
        return { x: this.pt.x+this.width/2, y: this.pt.y+this.height/2 };
      },
      update: function (dt) {
        try {
          if (this.toPt) {
            var len = this.speed * dt;
            this.pt.x = this.move(this.pt.x, this.toPt.x, len);
            this.pt.y = this.move(this.pt.y, this.toPt.y, len);
            if (this.isArrived()) {
              this.toPt = this.route.next();
            }
          } else {
            GameWorld.emit('enermyExit', this);
            return this.delete();
          }
          if (
            0 > this.pt.x ||
            0 > this.pt.y ||
            this.pt.x >= GameWorld.width ||
            this.pt.y >= GameWorld.height || this.isFin
          ) {
            //removeEnermy(this);
            GameWorld.emit('enermyDeleted', this);
            return this.delete();
          }
        } catch (ex) {
          console.error(ex);
          // removeEnermy(this);
          GameWorld.emit('enermyDeleted', this);
          this.delete();
        }
      },
      updateRoute() {
        this.route = this.searchRoute(this.pt);
        this.toPt = this.route.next();
      },
      isArrived() {
        if (!this.toPt) return false;
        var dx = Math.abs(this.toPt.x - this.pt.x);
        var dy = Math.abs(this.toPt.y - this.pt.y);
        if (2 > dx && 2 > dy) return true;
        return false;
      },
      paint: function (ctx) {
        GameUtils.diamond(ctx, this.center(), this.width, this.height, {
          fillStyle: "red",
        });
      },
      overlap: function (pt) {
        return !(
          this.tick < Math.abs(pt.x - this.pt.x) ||
          this.tick < Math.abs(pt.y - this.pt.y)
        );
      },
      hit: function(demage) {
        this.life -= demage;
        if(0 < this.life) return;
        // 삭제되고 금액 추가
        this.delete();
        GameWorld.emit('enermyDestroyed', this);
      }
    },
    { layer: 1 }
  );