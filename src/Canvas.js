import { useRef, useEffect, useState } from 'react';

const Canvas = props => {

  const canvasRef = useRef(null)

  const [ballX, setBallX] = useState(10);
  const [ballY, setBallY] = useState(10);
  const [posX, setPosX] = useState(2);
  const [posY, setPosY] = useState(2);

  const draw = (ctx) => {
    const w = parseInt(ctx.canvas.attributes.width.value);
    const h = parseInt(ctx.canvas.attributes.height.value);

    if (ballY >= h)
      setPosY = -2;

    if (ballY <= 0)
      setPosY = 2;

    if (ballX >= w)
      setPosX = -2;

    if (ballX <= 0)
      setPosX = 2;

    setBallY(ballY + posY);
    setBallX(ballX + posX);

    console.log("x:", ballX, "w:", w, "y:", ballY, "h:", h);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI)
    ctx.fill()
  }

  useEffect(() => {

    setTimeout(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      let frameCount = 0
      let animationFrameId

      //Our draw came here
      const render = () => {
        frameCount++
        draw(context, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()

      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, 5)
  }, [draw])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas;