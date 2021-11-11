GameWorld.Entity("Canon", {
    radius: 10,
    range: 50,
    created: function (props) {
      Object.assign(this, props);
      this.centerPt = {x: this.pt.x + tick, y: this.pt.y + tick };
      this.width = props.size;
      this.height = props.size;
      this.selected = false;
      this.angle = 0;
      this.props = {
        level: 1,
        sellCost: 2,
        upgradeCost: 2,
        bulletSpeed: 2, // per sec
        demage: 1,
      };
      this.bullet = 0;
      UpgradeMixin.call(this); 
    },
    update: function (dt) {
      //let q = GameUtils.angle(this.pt, pointer);
      this.upgradeUpdate(dt);
      this.target = this.getTarget();
      if(this.target && this.range >= this.target.len) {
        this.angle = GameUtils.angle(this.centerPt, this.target.obj.center());
        this.bullet += this.props.bulletSpeed*dt;
        if (1 < this.bullet) {
          this.bullet -= 1;
          this.target.obj.hit(this.props.demage);
        }
        // hit rate 계산
        // hit target
      }
    },
    paint: function (ctx) {
      GameUtils.circle(ctx, this.centerPt, this.radius, {
        fillStyle: "white",
      });
      GameUtils.circle(ctx, this.centerPt, this.radius, {
        lineWidth: 2,
        strokeStyle: "black",
      });
      GameUtils.line(
        ctx,
        this.centerPt,
        {
          x: this.centerPt.x + Math.cos(this.angle) * 13,
          y: this.centerPt.y + Math.sin(this.angle) * 13,
        },
        { lineWidth: 3, lineCap: "round", strokeStyle: "black" }
      );
      this.selected &&
        GameUtils.circle(ctx, this.centerPt, this.range, { lineDash: [5, 5] });
      this.upgradePaint(ctx);
    },
    overlap: function (pt) {
      if (this.radius < Math.abs(this.centerPt.x - pt.x)) return false;
      if (this.radius < Math.abs(this.centerPt.y - pt.y)) return false;
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
  });