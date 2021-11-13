GameWorld.Entity("Base", {
    created: function (props) {
      Object.assign(this, props);
      this.status = [];
      this.items = [];
      this.halfOfSize = this.size / 2;
      this.gridWidth = Math.floor(this.width / this.size);
      this.gridHeight = Math.floor(this.height / this.size);
    },
    paint: function (ctx) {
      let x1 = this.x + this.width;
      let y1 = this.y + this.height;
      for (let x = this.x; x < x1; x += this.size) {
        this.line(ctx, x, this.y, x, y1);
      }
      this.line(ctx, x1, this.y, x1, y1);
      for (let y = this.y; y < y1; y += this.size) {
        this.line(ctx, this.x, y, x1, y);
      }
      this.line(ctx, x1, y1, x1, y1);;
    },
    line: function (ctx, x0, y0, x1, y1) {
      GameUtils.line(
        ctx,
        { x: x0 - 0.5, y: y0 - 0.5 },
        { x: x1 - 0.5, y: y1 - 0.5 },
        { lineDash: [5, 5] }
      );
    },
    length: function() {
      return this.items.length;
    },
    pushItem: function (gridIdx, item) {
      if (this.getItem(gridIdx)) return;
      this.setItemStatus(gridIdx, item);
      this.items.push(item);
      return item;
    },
    removeItem: function (gridIdx) {
      let item = this.getItem(gridIdx);
      if (!item) return;
      let idx = this.items.indexOf(item);
      ~idx && this.items.splice(idx, 1);
      this.setItemStatus(item.idx, undefined);
      return item;
    },
    getItem: function (idx) {
      return (
        this.status[idx] ||
        this.status[idx + 1] ||
        this.status[this.gridWidth + idx] ||
        this.status[this.gridWidth + idx + 1]
      );
    },
    setItemStatus: function (idx, value) {
      this.status[idx] =
        this.status[idx + 1] =
        this.status[this.gridWidth + idx] =
        this.status[this.gridWidth + idx + 1] =
        value;
    },
    real2grid: function (pos) { // real axis to grid axis
      return { x: Math.round(pos.x / this.size), y: Math.round(pos.y / this.size) };
    },
    real2index: function (pos) {
      var gridPos = this.real2grid(pos);
      return this.grid2index(gridPos);
    },
    XY2index: function (gridX, gridY) {
      return gridY * this.gridWidth + gridX;
    },
    grid2index: function (gridPos) {
      return gridPos.y * this.gridWidth + gridPos.x;
    },
    index2grid: function (idx) {
      return { x: idx % this.gridWidth, y: Math.floor(idx / this.gridWidth) };
    },
    index2real: function (idx) {
      var gridPos = this.index2grid(idx);
      return this.grid2real(gridPos);
    },
    index2realCenter: function (idx) {
      var gridPos = this.index2grid(idx);
      return this.grid2realCenter(gridPos);
    },
    grid2real: function (gridPos) {
      return { x: gridPos.x * this.size, y: gridPos.y * this.size };
    },
    grid2realCenter: function (gridPos) {
      var ret = this.grid2real(gridPos);
      ret.x += this.halfOfSize;
      ret.y += this.halfOfSize;
      return ret;
    },
    setExits: function (value) {
      this.exits = value;
    },
    search: function (entry) {
      var self = this;
      return GameUtils.searchSimple(entry, this.exits, this.gridWidth, this.gridHeight, function (x, y) {
        var idx = self.XY2index(x, y);
        if (!~idx) return false;
        var ret = self.status[idx];
        return !ret || (2 === ret.cate || 3 === ret.cate) ? true : false;
      });
    },
  }, { layer: 0 });