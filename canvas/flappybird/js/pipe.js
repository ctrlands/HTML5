// 绘制管道
		var Pipe = function (upImg, downImg, x, speed, ctx) {
			this.upImg = upImg;
			this.downImg = downImg;
			this.x = x;
			this.speed = speed;
			this.ctx = ctx;
			this.r = Math.random() * 200 + 100; // 随机高度 + 固定高度
		}
		Pipe.prototype.draw = function () {
			this.ctx.drawImage(this.upImg, this.x, this.r - 420); // 管道图片长度420
			this.ctx.drawImage(this.downImg, this.x, this.r + 150); // 管道中间留白150px
		}
		Pipe.prototype.setCount = function (count, gap) {
			Pipe.count = count;
			Pipe.gap = gap; // 加入间隔
		}
		Pipe.prototype.update = function (dur) {
			this.x = this.x + this.speed * dur;
			if (this.x < -52) { // 管道宽度52px
				this.x = this.x + Pipe.count * Pipe.gap; // 无缝滚动
				this.r = Math.random() * 200 + 150; // 切换后的管道必须重新设置一个高度，给用户一个新管道的错觉

			}
		}
		Pipe.prototype.hitTest = function (x, y) {
			return (x > this.x && x < this.x + 52) && (!(y > this.r && y < this.r + 150)); // 在管子横向中间 在管子竖向中间
		}