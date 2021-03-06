import gql from 'graphql-tag'
export const BoardAllQuery = gql` 
             query  BoardAllQuery{
              BoardAllQuery{
                BoardId
                Title
                Content
              }
  }
 
`
export const BoardOneQuery = gql`
      query BoardOneQuery($BoardId:String){
            BoardOneQuery(BoardId:$BoardId) {
                  BoardId
                Title
                Content
                        }
      }
`


export const BoardUpdate = gql`
      mutation BoardUpdate($name:String,$tel:String,$nickName:String,$BoardId:String) {
            BoardUpdate(name:$name,tel:$tel,nickName:$nickName,BoardId:$BoardId) 
                     {
                        BoardId
                Title
                Content
                        }
      }      
`

export const BoardDelete = gql`
      mutation BoardDelete($BoardId:String) {
            BoardDelete(BoardId:$BoardId) 
                     {
                        BoardId
                        Title
                        Content
                        }
      }      
`

export const BoardAdd = gql`
      mutation BoardAdd($Title:String,$Content:String) {
            BoardAdd(Title:$Title,Content:$Content) 
                     {
                        Title
                        Content
                        BoardId
                        }
      }      
`