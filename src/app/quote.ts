export class Quote {

    showDetails:boolean;

    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public publisher: string,
        public uploadDate: Date,
        public upvote: number,
        public downvote: number,
        public highestUpvotes: boolean
    ){
        
     this.showDetails=false;   
    }
    
}
