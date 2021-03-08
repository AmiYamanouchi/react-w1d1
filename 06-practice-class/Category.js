

class Category extends React.Component {
    constructor() {
      super()
    }

    categories = data.map((result, index) => {
        console.log(result)
        return(
            <li className="cat-link left valign-wrapper" key={index}>
                <i className="material-icons" >{result.icon}</i>{result.title}
            </li>
      )})
  
    render(){

        console.log(this.props)
  
      return (
      

            <ul className="cat-nav center-align">
                {this.categories}
            </ul>
        
        
          
      )
    }
  }
  