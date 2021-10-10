import React from 'react';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';

import { useGetNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const { data: news } = useGetNewsQuery({
    category: 'Cryptocurrency',
    count: simplified ? 6 : 12,
  });

  if (!news) return 'Loading...';
  return (
    <Row gutter={[24, 24]}>
      {news.value.map((article, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={article.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {article.name}
                </Title>
                <img src={article?.image?.thumbnail?.contentUrl} alt='news' />
              </div>
              <p>
                {article.description.length > 100
                  ? `${article.description.substring(0, 100)}...`
                  : article.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar
                    src={
                      article.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=''
                  />
                  <Text className='provider-name'>
                    {article.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(article.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
