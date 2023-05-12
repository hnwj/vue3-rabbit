import httpInstance from '@/utils/http' 

export getCategory(){
  return httpInstance({
    url: 'home/category/head'
  })
}