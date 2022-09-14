import ImageSlider from './ImageSlider'

function App() {

  const slides = [
    'https://i.picsum.photos/id/1061/3264/2448.jpg?hmac=HoVLqUN6k0SMxCPSdgoc9_6Mhu3nGYm_lL3NgrDbwFU',
    'https://i.picsum.photos/id/1067/5760/3840.jpg?hmac=gO_V7rUFdM8YddyLysCQet4CS0CzSvUcfAtHI1ismLM',
    'https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY',
    'https://i.picsum.photos/id/1076/4835/3223.jpg?hmac=sw_W2oBUV1Pp_QwMbkODYHgWlX-SOkVRatS_UErh64Q',
    'https://i.picsum.photos/id/108/2000/1333.jpg?hmac=jtsJnUALS7Y2pJnLKGF7fSvGhEKpDWLvjTr9bRVFELA',
  ]

  const containerStyles = {
    width: '95vw',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    aligntItems: 'center',
    flexDirection: 'column'
  }

  const sliderContainerStyles = {
    width: '900px',
    height: '600px',
    margin: '0 auto'
  }

  return (
    <div style={containerStyles}>
      <div style={sliderContainerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
