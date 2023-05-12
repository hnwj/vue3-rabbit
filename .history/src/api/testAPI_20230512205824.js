import httpInstance from '@/utils/http' 

export getCategory(){
  httpInstance({
    url: 'home/category/head'
  })
}