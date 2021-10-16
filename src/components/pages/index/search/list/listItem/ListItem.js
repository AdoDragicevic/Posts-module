import Header from "../../../../../UI/header/Header";
import ImgBox from "../../../../../layout/imgBox/ImgBox";

import classes from "./ListItem.module.css";


function ListItem({ img, title, email, author }) {
  return (
    <li className={classes.root}>
      <Header>{title}</Header>
      <div className={classes.img}>
        <ImgBox url={img} />
      </div>
      <div className={classes.info}>
        <p>{email}</p>
        <p className={classes.author}>{author}</p>
      </div>
      <div className={classes.line} />
    </li>
  )
};

export default ListItem;