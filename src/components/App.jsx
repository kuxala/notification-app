import '../App.css';
import Header from "./Header";
import Card from "./Card";



function App() {


  return (
    <>
    
      <div className="wrapper">
          <Header/>
          <div className="blue-background ">
            <Card 
            image="./images/avatar-mark-webber.webp"
            name="Mark Webber "
            text="reacted to your recent post My first tournament today!"
            time="1m ago"
            />
        </div>

        <div className="blue-background">
          <Card 
          image="./images/avatar-angela-gray.webp"
          name="Angela Gray "
          text="followed you"
          time="5m ago"
          />
        </div>
        
        <div className="blue-background">
          <Card 
          image="./images/avatar-jacob-thompson.webp"
          name="Jacob Thompson "
          text="has joined your group Chess Club"
          time="1 day ago"
          />
        </div>
          <Card 
          image="./images/avatar-rizky-hasanuddin.webp"
          name="Rizky Hasanuddin "
          text="sent you a private message"
          time="5 day ago"
          />
        
          <Card 
          image="./images/avatar-kimberly-smith.webp"
          name="Kimberly Smith "
          text="commented on your picture"
          time="1 week ago"
          />

          <Card 
          image="./images/avatar-nathan-peterson.webp"
          name="Nathan Peterson "
          text="reacted to your recent post 5 end-game strategies to increase your win rate"
          time="2 weeks ago"
          />

          <Card 
          image="./images/avatar-anna-kim.webp"
          name="Anna Kim "
          text="left the group Chess Club"
          time="3 weeks ago"
          />

      </div>
    </>
  );
}

export default App;
