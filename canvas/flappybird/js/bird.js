// 绘制小鸟
		var Bird = function (img, x, y, speed, a, ctx) {
			this.img = img;
			this.x = x;
			this.y = y;
			this.speed = speed;
			this.a = a;
			this.ctx = ctx;
			this.index = 0; // 用于绘制小鸟挥动翅膀的动作
		}
		Bird.prototype.draw = function () {
			this.ctx.save();
			this.ctx.translate(this.x, this.y); // 坐标移到小鸟的中心点上
			this.ctx.rotate( (Math.PI / 6) * this.speed / 0.3 );
			//小鸟最大旋转30度，并随着速度实时改变角度
			this.ctx.drawImage(
				/*this.img, 52*this.index, 0, 52, 45, this.x, this.y, 52, 45
				);*/
				this.img, 52*this.index, 0, 52, 45,
				-52/2, -45/2, 52, 45 // 整个小鸟坐标系开始移动
								);
			this.ctx.restore();
		}

		var durgather = 0;
		Bird.prototype.update = function (dur) {
			// 小鸟翅膀挥动每100ms切换一张图片
			durgather += dur;
			if (durgather > 100) {
				this.index ++ ;
				if (this.index ===2) {
					this.index = 0;
				}
				durgather -= 100;
			}
			// 小鸟下落动作
			this.speed = this.speed + this.a * dur;
			this.y = this.y + this.speed * dur;
			//console.log(this.y);
		}