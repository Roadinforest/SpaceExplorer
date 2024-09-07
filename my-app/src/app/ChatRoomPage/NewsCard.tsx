import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/';

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Array<{ launch_id: string; provider: string }>;
  events: Array<{ event_id: number; provider: string }>;
}

export default function NewsCard() {
  const [articles, setArticles] = React.useState<Article[]>([]);

  React.useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.results.slice(0, 5)); // 获取前5篇文章
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Card key={article.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt={article.title}
            height="140"
            image={article.image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {article.summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={article.url} target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
