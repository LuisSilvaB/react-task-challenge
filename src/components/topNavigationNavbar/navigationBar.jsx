import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { BsSearch, BsXCircle, BsBell, BsX  } from "react-icons/bs";

import { useGetTasksDataQuery } from '../../hooks/graphql/queries/useGetTasksDataQuery'

import './desktop-navigationBar.css'
import './android-navigationBar.css'
import './iphone-navigationBar.css'
import Options from '../options/options';
import CardTask from '../cardTask/cardTask';

export default function NavigationBar(props) {
  const { typeDevice } = props;
  const [ inputAndroidState, setInputAndroidState ] = useState(false)
  const [ typeLocalOptions, setTypeLocalOptions] = useState(''); 
  const [ filterValue, setFilterValue] = useState(''); 
  const [ tasksFilter, setTasksFilter] = useState({tasks:[]}); 
  

  const {error, data, loading } = useGetTasksDataQuery(
    {
      name: filterValue,
    }
  )
  useEffect(()=>{
    if (filterValue == "") {setTypeLocalOptions('')}
    else {setTypeLocalOptions('filter') }
  },[filterValue])

  useEffect(()=>{
    if (data === undefined) setTasksFilter({tasks:[]})
    else setTasksFilter(data)

  },[data])

  useEffect(()=>{
    (()=>{handleInputChange()})
  },[])

  const FilterTasks = (value) => {
    setFilterValue(value)
  }
  
  const handleInputChange = () => {
    console.log('tocado');
    if (typeDevice == 'iphone') {setInputAndroidState(false)} 
    if (typeDevice == 'android') {setInputAndroidState(!inputAndroidState)} 
  }
  return (
    <div 
      className={`${typeDevice}-navigationBar`}>
      <div 
        className={`${typeDevice}-navigationBar__search-container`}>
        <div 
          className={`${typeDevice}-navigationBar__search-input-container`}>
          <BsSearch 
            className={`${typeDevice}-navigationBar__icon`} onClick={()=>{handleInputChange()}}/>
          <input 
            type="text" 
            placeholder={`${typeDevice === 'android'?'':'Search'}`} 
            className={`${typeDevice}-navigationBar__input desktop-regular-M-body`}
            onChange={(e)=>{FilterTasks(e.target.value)}}
            />
        </div>
        <BsXCircle 
          className={`${typeDevice}-navigationBar__icon ${typeDevice}-xcircle`}/>
        <BsBell 
          className={`${typeDevice}-navigationBar__icon`}/>
      </div>
      <img src='https://randomuser.me/api/portraits/thumb/men/22.jpg' className={`${typeDevice}-navigationBar__img`}/>
      <Options typeLocalOptions = {typeLocalOptions} tasksFilter = {tasksFilter}/>
      {
        typeLocalOptions === "filter"? (
          <div className={`${typeDevice}-filterCards-container`}>
            <BsX size={40} className={`${typeDevice}-filterCards-container-close-button`} onClick={()=>{
              setTypeLocalOptions('')
            }}/>
            {
              tasksFilter.tasks.map((task,key)=>(

                    <CardTask key = {key} task = {task} className={`${typeDevice}-filterCard-container`} />
       
              ))
            }
          </div>
        ):<></>
      }
    </div>
  )
}
NavigationBar.protoTypes = {
  typeDevice: PropTypes.string,
}