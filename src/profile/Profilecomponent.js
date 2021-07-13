import PropTypes  from "prop-types"
const Prof = props => {

    console.log(props)
    return(
        <div>
            <h1>
                This is {props.name}
            </h1>
            <h2>
                {props.bio}
            </h2>
            <h2>
                {props.profession}
            </h2>
           {props.children}

        </div>
    );


}
Prof.defaultProps={
    name: 'manel',
    bio: 'bio',
    profession:'profession',
    HandleAlert:()=>alert("default function")

}
Prof.propTypes={
   name : PropTypes.string , 
   bio : PropTypes.string ,
   profession : PropTypes.string,
   HandleAlert:PropTypes.func
}
export default Prof;