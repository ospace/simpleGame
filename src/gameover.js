GameWorld.Entity(
    "Gameover",
    {
      created: function (props) {
        this.text = 'Game Over!';
      },
      update: function (dt) {
      },
      paint: function (ctx) {
        GameUtils.text(
          ctx,
          {
            x: this.width / 2,
            y: this.height / 2,
          },
          this.text,
          {
            font: "bold 36px sans-serif",
            textAlign: "center",
            textBaseline: "middle",
            fillStyle: "black",
            strokeStyle: "black",
          }
        );
      },
    },
    { layer: 10 }
  );