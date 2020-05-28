import React from "react";
interface IHeaderProps{
    title: string;
}
    


const Header : React.FC<IHeaderProps> = ({title})=> (
<header>
    <h1 id= "header-title" >Anime </h1 >
    <div className="button-header">
        <button className="profile-btn" >Acceder</button>
    </div>
</header>

);
export default Header;