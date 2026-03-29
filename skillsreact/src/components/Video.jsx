import "../css/Video.css";

const Video = () => {
  return (
    <div className="video-wrap">
      <div className="event-date-bottom">Video</div>
      <iframe
        id="video"
        src="https://www.youtube.com/embed/4FeAaTEDjDw?si=IpGmNKNgi-CgPoi3"
        title="Skill Swap Guide Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default Video;