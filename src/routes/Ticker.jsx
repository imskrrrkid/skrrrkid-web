import Homepage from "./Hompage.module.css";

function Ticker() {
  return (
    <div className={Homepage.news}>
      <div className={Homepage.ticker}>
        <span>🚨Website under construction</span>
        <span>🔥 But you can navigate :D</span>
        <span>📢 You can see my social media accounts till then.</span>

        {/* Duplicate for smooth loop */}
        <span>🚨 Website under construction</span>
        <span>🔥 But you can navigate :D</span>
        <span>📢 You can see my social media accounts till then.</span>
      </div>
    </div>
  );
}

export default Ticker;
