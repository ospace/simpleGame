var ptnWall = null;
    GameWorld.Entity("Wall", {
      created: function (props) {
        this.idx = props.idx;
        this.pt = props.pt;
        this.width = props.size;
        this.height = props.size;
        this.cate = props.cate;
        this.props = {
          level: 1,
          sellCost: 1,
          upgradeCost: 2,
        };
        UpgradeMixin.call(this);
      },
      update: function (dt) {
        this.upgradeUpdate(dt);
      },
      paint: function (ctx) {
        GameUtils.fillRect(ctx, this.pt, this.width, this.height, {
          fillStyle: ptnWall[this.cate],
        });
        this.upgradePaint(ctx);
      },
      overlap: function (pt) {
        if (this.width < Math.abs(this.pt.x - pt.x)) return false;
        if (this.height < Math.abs(this.pt.y - pt.y)) return false;
        return true;
      },
      upgrade: function () {
        if (!this.isUpgradeable()) throw new Error('already upgrading')
        this.beginUpgrade();
      },
      sell: function () {
        if (!this.isUpgradeable()) throw new Error('already upgrading')
        this.delete();
        return this.props.sellCost;
      },
    }, { layer: 1 });