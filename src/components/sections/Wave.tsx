import Waveanimation from "react-wavify"

export function Wave() {
  return (
    <Waveanimation
      fill="rgb(255 255 255)"
      paused={false}
      options={{
        height: 40,
        amplitude: 50,
        speed: 0.25,
        points: 3
      }}

    />
  )
}


export function Wave1() {

  return (
    <div style={{ transform: 'scaleY(-1)' }} className='mb-5'>
      <Waveanimation
        fill="rgb(255 255 255)"
        paused={false}
        options={{
          height: 40,
          amplitude: 50,
          speed: 0.25,
          points: 2
        }}
      />
    </div>

  )
}
