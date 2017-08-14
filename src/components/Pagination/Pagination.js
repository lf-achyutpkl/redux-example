import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _range from 'lodash/range';

import styles from './styles';

class Pagination extends Component{

  constructor(props){
    super(props);

    this.state = {
      pages: [],
      pageSize: props.pageSize,
      currentPage: 6,
      totalItems: props.totalItems,
      numberOfPages: 0,
      isLastActive: true,
      isNextActive: true,
      isFirstActive: true,
      isPreviousActive: true
    };
  }

  componentDidMount(){
   this._setPropsToState();
  }

  componentWillReceiveProps(nextProps){
    this._setPropsToState();
  }

  render(){
    return(
        <div style={{ margin: '0 auto', width: '300px', background: 'yellow'}}>
          <span style={styles.buttons} onClick = {this.state.isFirstActive ? () => this._onClickFirst() : null}> First </span>
          <span style={styles.buttons} onClick = {this.state.isPreviousActive? () => this._onClickPrevious() : null}> Previous </span>

          {
            this.state.pages && this.state.pages.map(page => (
              <span style={page !== this.state.currentPage ? styles.buttons : styles.activeButton} key = {page} onClick = {page !==  this.state.currentPage ? () => this._onClickPage(page) : null}>{page}</span>
            ))
          }

          <span style={styles.buttons} onClick = {this.state.isNextActive? () => this._onClickNext() : null}> Next </span>
          <span style={styles.buttons} onClick = {this.state.isLastActive? () => this._onClickLast() : null}> Last </span>
        </div>
    );
  }

  /**
   * Set total number of pages.
   */
  _setPropsToState = () => {
    let totalNumberOfPages = Math.ceil(this.props.totalItems / this.props.pageSize);
    this.setState({
      pages: _range(1, totalNumberOfPages + 1),
      numberOfPages: totalNumberOfPages
    }, () => {
      this._setActiveButtons();
    })
  }

  _setActiveButtons = () => {
    if(this.state.currentPage === 1){
      this.setState({isFirstActive: false, isPreviousActive: false, isLastActive: true, isNextActive: true});
    } else if(this.state.currentPage === this.state.numberOfPages){
      this.setState({isLastActive: false, isNextActive: false, isFirstActive: true, isPreviousActive: true});
    } else {
      this.setState({isLastActive: true, isNextActive: true, isFirstActive: true, isPreviousActive: true})
    }
  }

  _onClickPage = (page) => {
    this.setState({currentPage: page}, () => {
      this._setActiveButtons();
      this.props.onPageSelect(page);
    })
  }

  _onClickNext = () => {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this._setActiveButtons();
      this.props.onPageSelect(this.state.currentPage);
    });
  }

  _onClickPrevious = () => {
    this.setState({currentPage: this.state.currentPage - 1}, () => {
      this._setActiveButtons();
      this.props.onPageSelect(this.state.currentPage);
    });
  }

  _onClickFirst = () => {
    this.setState({currentPage: 1}, () => {
      this._setActiveButtons();
      this.props.onPageSelect(this.state.currentPage);
    })
  }

  _onClickLast = () => {
    this.setState({currentPage: this.state.numberOfPages}, () => {
      this._setActiveButtons();
      this.props.onPageSelect(this.state.currentPage);
    });
  }
}

Pagination.defaultProps = {
  pageSize: 20,
  totalItems: 104,
  onPageSelect: (page) => console.log(page)
}

Pagination.PropTypes = {
    pageSize: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    onPageSelect: PropTypes.func.isRequired
}

export default Pagination;
