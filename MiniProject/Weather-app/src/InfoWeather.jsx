import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function InfoWeather({info}){
  let IMG_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let C_W = "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let H_W ="https://media.istockphoto.com/id/1162305024/photo/global-warming-high-temperature-city-heat-wave-in-summer-season-concept.webp?b=1&s=170667a&w=0&k=20&c=LH7MNvCvt9NL__SANJxPUSuSQA0wrXW0jS6kjP0Sq9A=";
  let R_W = "https://media.istockphoto.com/id/503284599/photo/rainy-weather.webp?b=1&s=170667a&w=0&k=20&c=lgzp0sKUeq04Hzd_8iAKDi21ovnbRk02zGF9CXKhngk=";
  

 
    return(<>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? R_W : info.temp > 15 ? H_W : C_W}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.temp_min}&deg;C</p>
            <p>Max Temp = {info.temp_max}&deg;C</p>
            <p>The weather can be describe as <b>{info.description}</b> and feels like {info.feels_like}&deg;C </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>);
}