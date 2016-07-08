import React, { Component } from 'react';

import EntryList from '../containers/entry-list';
import SubcategoryList from '../containers/subcategory-list';

export default class Subcategory extends Component {
  componentWillMount() {
    console.log('call fetch action for subcategories');
    console.log('Subcategory: ', this.props);
  }

  render() {
    return (
      <div>
        <h3>Select a subcategory</h3>
        <SubcategoryList />
      </div>
    );
  };
}