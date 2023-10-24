import React, { useEffect, useState } from 'react'
import homeCss from '../styles/home.module.css'
import Profileweather from './Profileweather'
import News from './News'
import Temp from './Temp'
import Notes from './Notes'
import Timer from './Timer'

function Home() {

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [username, setUsername] = useState('')
  let [categories, setCategories] = useState([])

  useEffect( () => {
      let string_obj = localStorage.getItem('information')
      let user_data_obj = JSON.parse(string_obj);

      setName(user_data_obj.NAME)
      setEmail(user_data_obj.EMAIL)
      setUsername(user_data_obj.USERNAME)
      
      let arr_obj = localStorage.getItem('categories')
      let categories_arr = JSON.parse(arr_obj);

      setCategories(categories_arr)

  }, [])

  let [title, setTitle] = useState('')
  let [description, setDescription] = useState('')
  let [newsImg, setNewsImg] = useState('')

  useEffect( () => {

    const newsApi = async () => {
      let raw_data = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-23&sortBy=publishedAt&apiKey=333618fda6dd425990d7e21b2169a83a')
      .then( (res) => {
          res.json().then( (data) => {
            console.log(data.articles[0])
            setTitle(data.articles[0].title)
            setDescription(data.articles[0].description)
            setNewsImg(data.articles[0].urlToImage)
          } )
      })
      
    }

    newsApi()

  }, [])


  return (
    <>
        <div className={homeCss.child_1}>
          <div className={homeCss.row_2}>
            <Profileweather name={name} email={email} username={username} categories={categories}></Profileweather>
          </div>

          <div className={homeCss.row_3}>
            <Notes></Notes>
          </div>

          <div className={homeCss.rest_row}>
            <News title={title} description={description} img={newsImg}></News>
          </div>

          <div className={homeCss.temp1}>
            <Temp></Temp>
          </div>

          <div className={homeCss.col_2}>
            <Timer></Timer>
          </div>
        </div> 

    </>
  )
}

export default Home
