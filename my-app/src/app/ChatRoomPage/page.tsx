import ProfileCard from '../ProfileCard';
import PostPage from './Chat';
import NewsCard from './NewsCard';

export default function pages() {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "top" }}>
      <div style={{ flex: 1, width: "100%", marginBottom: "20px" }}>
        <ProfileCard profileName='Astronaut' />
      </div>
      <div style={{ flex: 2, width: "100%", marginBottom: "20px" }}>
        <PostPage />
      </div>
      <div style={{ flex: 1, width: "100%" }}>
        <NewsCard />
      </div>
    </div>
  );
};
