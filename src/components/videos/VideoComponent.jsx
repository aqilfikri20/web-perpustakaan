import "./video.css"
const VideoComponent = (any) => {
    return(
      <div className="wrap-video">
        <div className="video-content">
          <video
          width="95%"
          height="auto"
          controls
          poster="/images/video-thumbnail.png"
          >
          <source src="/video/video-pustaka.mp4" type="video/mp4" />
          Your browser does not support the video tag.
           </video>
        </div>
      </div>

    )
}

export default VideoComponent;