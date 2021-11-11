function UpgradeMixin() {
    this.upgradeTime = 1;
    this.upgradeTick = this.width / this.upgradeTime;
    this.upgradeUpdate = function (dt) {
      if (0 < this.upgradeTimeout) {
        this.upgradeTimeout = Math.max(this.upgradeTimeout - dt, 0);
        this.upgradeBar += dt * this.upgradeTick;
      } else {
        if (0 === this.upgradeTimeout) {
          this.upgradeTimeout = -1;
          this.props.level += 1;
          this.props.upgradeCost *= 2;
          this.props.sellCost += (this.props.sellCost >> 1);
          GameWorld.emit('upgradeEnd', this);
        }
      }
    }; 
    this.upgradePaint = function(ctx) {
      if (0 < this.upgradeTimeout) {
        GameUtils.fillRect(ctx, { x: this.pt.x + this.upgradeBar, y: this.pt.y + this.height - 8 },  this.height - this.upgradeBar, 8, {
          fillStyle: 'white',
        });
        GameUtils.fillRect(ctx, { x: this.pt.x, y: this.pt.y + this.height - 8 }, this.upgradeBar, 8, {
          fillStyle: 'green',
        });
        GameUtils.rect(ctx, { x: this.pt.x + 0.5, y: this.pt.y + this.height + 0.5 - 8 }, this.width, 8, {
          strokeStyle: 'black',
        });
      }
    };
    this.beginUpgrade = function () {
      this.upgradeTimeout = this.upgradeTime;
      this.upgradeBar = 0;
      GameWorld.emit('upgradeBegin', this);
    };
    this.isUpgradeable = function() {
      return !(0 < this.upgradeTimeout);
    }
  }