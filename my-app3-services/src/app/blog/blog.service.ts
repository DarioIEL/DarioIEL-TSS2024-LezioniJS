import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url: string = "https://dummyjson.com/posts";

  posts: Post[];

  constructor(private http: HttpClient) { }

  getPosts(){
    //riceverò dei dati, questi dati saranno un Observable --> .subscribe()
    // return this.http.get(this.url).subscribe((postsAPI: Post[]) =>{
    //   this.posts = postsAPI['posts'];
    //   console.log(postsAPI['posts']);
    // })

    //Questo metodo esegue la chiamata get, mi restituirà un Observable sul quale dovrò fare un subscribe()
    //Il subscribe() lo eseguo nel component che sfrutta il servizio
    return this.http.get<Post[]>(this.url);

  }



}
