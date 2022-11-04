import { ImageList, imageListClasses, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/9/96/Queen_I.jpg",
    title: "Queen",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/a/ad/Queen_II.jpg",
    title: "Queen II",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/5/55/Sheer_Heart_Attack.jpg",
    title: "Sheer Heart Attack",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/b/bf/A_Night_at_the_Opera_Queen.jpg",
    title: "A Night at the Opera",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/8/83/A_Day_at_the_Races_-_Queen_-_1976.jpg",
    title: "A Day at the Races",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/7/7d/Queen-News_of_the_World.jpg",
    title: "News of the World",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/d/d9/Queen-Jazz.jpg",
    title: "Jazz",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Queen-The_Game.jpg",
    title: "The Game",
  },
];
const AlbumPage = () => {
  // const lista = imageListClasses();

  return (
    <ImageList sx={{ width: "100%", height: "100%", margin: "auto" }} cols={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default AlbumPage;
