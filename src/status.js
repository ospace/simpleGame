GameWorld.Entity(
    "Status",
    {
      created: function () {
        this.message = "";
        this.messageTmeout = 0;
        this.gold = 0;
        this.score = 0;
        this.life = 0;
      },
      update: function (dt) {
        if (0 < this.messageTmeout) {
          this.messageTmeout -= dt;
        } else {
          this.message = "";
        }
      },
      paint: function (ctx) {
        GameUtils.text(
          ctx,
          {
            x: tileSize,
            y: tick,
          },
          "Score: " + this.score,
          {
            font: "bold 16px sans-serif",
            textAlign: "left",
            textBaseline: "middle",
            fillStyle: "white",
            strokeStyle: "black",
          }
        );
        GameUtils.text(
          ctx,
          {
            x: (AreaWidth - 1) * tileSize,
            y: tick,
          },
          `Gold: ${this.gold} Life: ${10 > this.life ? '0' + this.life : this.life}`,
          {
            font: "bold 16px sans-serif",
            textAlign: "right",
            textBaseline: "middle",
            fillStyle: "white",
            strokeStyle: "black",
          }
        );
        this.message &&
          GameUtils.text(
            ctx,
            {
              x: tileSize,
              y: GameWorld.height - tick,
            },
            this.message,
            {
              font: "12px sans-serif",
              textAlign: "left",
              textBaseline: "middle",
              fillStyle: "white",
              strokeStyle: "black",
            }
          );
      },
      setMessage: function (value) {
        this.message = value;
        this.messageTmeout = 3;
      },
      setScore: function (value) {
        this.scroe = value;
      },
      setGold: function (value) {
        this.gold = value;
      },
      withdraw: function (value) {
        if (0 >= value) return 0;
        var ret = Math.min(value, this.gold);
        this.gold -= ret;
        return ret;
      },
      deposit: function (value) {
        this.gold += value;
      },
      setLife: function (value) {
        this.life = value;
      },
    },
    { layer: 9 }
  );