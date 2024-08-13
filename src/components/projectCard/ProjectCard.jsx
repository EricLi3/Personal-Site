import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ProjectCard = ({ image, title, subtitle, text, githubLink, websiteLink }) => {
  return (
    <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
      <Card.Img variant="top" src={image} style={{ height: '150px', objectFit: 'cover' }} />
      <br />
      <Card.Body>
        <Card.Title style={{ color: '#D1D5DB' }}>
          <b>{title}</b>
          {subtitle && <><br /><i>{subtitle}</i></>}
        </Card.Title>
        <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
          {text}
        </Card.Text>
        <br />
        <Stack spacing={2} direction="row" justifyContent="center">
          {githubLink && <Button variant="contained" href={githubLink}>GitHub</Button>}
          {websiteLink && <Button variant="contained" href={websiteLink}>Website</Button>}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
