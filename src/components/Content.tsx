import React from 'react';
import { Header, Card, Segment, Grid } from 'semantic-ui-react'
import { Book } from './Book';
import { BookGroup } from './models';

export class Content extends React.Component<{}, {books: any}> {
    
    constructor(props: any) {
        super(props);
        var data: BookGroup[] = [
            { 
                groupName: "0,5+",
                books: [
                    {
                        title: "Moje pierwsze odkrycia (seria)",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    },
                    {
                        title: "Ta-da! / Canizales",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    }
                    ,
                    {
                        title: "W nocy / zilustrowała Nathalie Choux",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    }
                    ,
                    {
                        title: "Oto jest ogród / Hector Dexet",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    }
                    ,
                    {
                        title: "Gdy przychodzi wieczór",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    },
                    {
                        title: "Wiersze Tuwima i Brzechwy - małe książeczki",
                        author: "Jan Brzechwa",
                        coverUrl: "",
                        link: ""
                    }
                ]
            },
            { 
                groupName: "1+",
                books: [
                    {
                        title: "Moje pierwsze odkrycia (seria)2",
                        author: "aa",
                        coverUrl: "",
                        link: ""
                    }
                ]
            }
        ]
        this.setState({books: data});
        this.state = {books: data};
      }

    render() {
        const { books } = this.state;
      return (
        

            <Grid columns={1} stackable centered>
                <Grid.Column width={12}>

            <Header as='h1'>Książki dla dzieci</Header>
            {books.map((value: any, index: number) => {

                return <div>
                        <h2>{value.groupName}</h2>
                        <Card.Group>
                        {value.books.map((value: any, index: number) => {

                            return <Book data={value}></Book>
                    })}
                    </Card.Group>
                    </div>
            })}
        </Grid.Column>
            </Grid>
      );
    }
  }