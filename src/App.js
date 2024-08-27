
import './App.css';
import Accordian from './components/accordian';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import ScrollIndicator from './components/scroll-indicator';
import Tabtest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/git-hub-profile-finder';
import SearchAutoComplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';

function App() {
  return (
    <div className="App">
       <Accordian />
      <RandomColor/> 
      
    <LoadMoreData/> 
     <TreeView menus={menus}/> 
     <ScrollIndicator url = {'https://dummyjson.com/products?limit=100'}/> 
    <Tabtest/> 
     <ModalTest /> 
     <GithubProfileFinder/> 
     <SearchAutoComplete /> 
     <TicTacToe />


    </div>
  );
}

export default App;
