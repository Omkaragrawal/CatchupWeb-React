import React, { PureComponent } from 'react';
import Newsposts from "./Newsposts"

class Table extends PureComponent {
 render() {
    // {this.props.data}
    let array = [];
    if(this.props.data) {
      array= this.props.data.map (post => <Newsposts {...post} key={post.id}/>);
   }
     return (
     <table className="table-bordered table col-sm-8 col-lg-10 col-md-10 col-xl-11" id="contentHn">
        <tbody>{array}</tbody>
     </table>
     );
 }
}

export default Table;