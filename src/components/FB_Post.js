import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Tooltip
} from "@material-ui/core";
import ThumbIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// other libs
import FacebookEmoji from "react-facebook-emoji";

import moment from "moment";

const styles = theme => ({
  card: {
    maxWidth: 450,
    margin: "5px",
    padding: "0px"
  },
  actions: {
    display: "flex"
  }
});

class FBPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReactions: false,
      likeBtnFlag: false,
      likes: props.post.likes,
      whNUM: 0,
      // reactions on hover like button
      reactLike: false,
      reactLove: false,
      reactWow: false,
      reactYay: false,
      reactAngry: false,
      reactHaha: false,
      reactSad: false
    };
    this.handlerShowReactions = this.handlerShowReactions.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.onresize = this.onresize.bind(this);
  }

  handleLike() {
    const { likes, likeBtnFlag, showReactions } = this.state;

    this.setState({ likeBtnFlag: !likeBtnFlag });
    likes.includes("Tu") ? likes.shift("Tu") : likes.unshift("Tu");
    this.setState({ likes, showReactions: !showReactions });
  }

  handlerShowReactions(param) {
    this.setState({ showReactions: param });
  }

   onresize() {
     let width = window.outerWidth;

     if (width <= 530) {
       this.setState({ whNUM: 100 });
     } else if (width >= 1600 || (width >= 1024 && width <= 1440)) {
       this.setState({ whNUM: 34 });
     } else if (width > 530 && width < 1024) {
       this.setState({ whNUM: 70 });
     }
   }

   componentDidMount() {
      this.onresize();
   }

  render() {
    var cuenta=0;
    function contar(like) {
      cuenta=like + 1;
      return cuenta
    };
    const { classes, post, producto } = this.props;
    const {
      showReactions,
      likes,
      likeBtnFlag,
      reactLike,
      reactLove,
      reactWow,
      reactYay,
      reactAngry,
      reactHaha,
      reactSad
      //whNUM
    } = this.state;
     window.addEventListener("resize", this.onresize);
     function mercadopago(){
      if (producto.accepts_mercadopago)
          return "https://raw.githubusercontent.com/devjaime/clone-mercadolibre/master/img/mercadopago.png";
      else
        return "https://raw.githubusercontent.com/devjaime/clone-mercadolibre/master/img/pagoefectivo.png";
     };
    

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Profile Picture">
                <img src={producto.thumbnail} alt="M" width="40px" height="40px" />
              </Avatar>
              
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={producto.title }
            subheader={moment(post.createdAt).fromNow()}
          />
          <CardContent>
            <Typography component="p">{post.description}</Typography>
          </CardContent>
          <div>
           

            <div className="uk-card uk-card-default uk-card-hover ">
                <div className="uk-card-media-top">
                    {producto.thumbnail 
                        ? <img src={producto.thumbnail} alt={producto.title} />
                        : null }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{producto.title}</h3>
                    {producto.title}
                </div>
                <div className="uk-card-body">Precio 
                    <div className="uk-card-title">${producto.price}</div>
                    
                </div>   
                <CardHeader
                    avatar={
                      <Avatar aria-label="Profile Picture">
                        <img src={mercadopago()} alt="M" width="40px" height="40px" />
                      </Avatar>
                      
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={producto.address.state_name + ' ' + producto.address.city_name }
                    subheader={moment(post.createdAt).fromNow()}
                />         
                <div className="uk-card-footer navBarDegradeitor ">
                    <a target="_blank" rel="noopener noreferrer " href={producto.permalink} className="uk-button uk-button-primary  botondefecto">
                        Más Información
                    </a>
                </div>
            </div>
            
          </div>
          <hr />
          <p style={{ fontSize: "10px", marginLeft: "5px" }}>
            {likes[0]}, {likes[1]} y {contar(likes.length)} Más
          </p>
          {showReactions && (
            <div
              style={{
                bottom: "7%",
                position: "absolute",
                padding: "5px 10px",
                borderRadius: "50px",
                background: "#fafafa",
                boxShadow: "1px 1px 5px grey"
              }}
              onMouseLeave={() => {
                this.handlerShowReactions(false);
              }}
            >
              <span
                onMouseOver={() => {
                  this.setState({ reactLike: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactLike: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactLike: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactLike: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactLike: false });
                }}
              >
                <FacebookEmoji size={reactLike ? "md" : "sm"} type="like" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactLove: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactLove: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactLove: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactLove: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactLove: false });
                }}
              >
                <FacebookEmoji size={reactLove ? "md" : "sm"} type="love" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactHaha: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactHaha: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactHaha: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactHaha: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactHaha: false });
                }}
              >
                <FacebookEmoji size={reactHaha ? "md" : "sm"} type="haha" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactYay: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactYay: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactYay: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactYay: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactYay: false });
                }}
              >
                <FacebookEmoji size={reactYay ? "md" : "sm"} type="yay" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactWow: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactWow: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactWow: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactWow: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactWow: false });
                }}
              >
                <FacebookEmoji size={reactWow ? "md" : "sm"} type="wow" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactAngry: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactAngry: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactAngry: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactAngry: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactAngry: false });
                }}
              >
                <FacebookEmoji size={reactAngry ? "md" : "sm"} type="angry" />
              </span>
              <span
                onMouseOver={() => {
                  this.setState({ reactSad: true });
                }}
                onMouseOut={() => {
                  this.setState({ reactSad: false });
                }}
                onTouchStart={() => {
                  this.setState({ reactSad: true });
                }}
                onTouchMove={() => {
                  this.setState({ reactSad: false });
                }}
                onClick={() => {
                  this.handlerShowReactions(false);
                  this.handleLike();
                  this.setState({ reactSad: false });
                }}
              >
                <FacebookEmoji size={reactSad ? "md" : "sm"} type="sad" />
              </span>
            </div>
          )}
          <CardActions className={classes.actions}>
            <Tooltip title="Like" placement="right">
              <IconButton
                aria-label="Like"
                onClick={this.handleLike}
                onMouseEnter={() => {
                  this.handlerShowReactions(true);
                }}
                onTouchStart={() => {
                  this.handlerShowReactions(true);
                }}
                onBlurCapture={() => {
                  this.handlerShowReactions(false);
                }}
                color={likeBtnFlag ? "primary" : "default"}
              >
                <ThumbIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Comment" placement="right">
              <IconButton>
                <CommentIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share" placement="right">
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
    );
  }
}

FBPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FBPost);
