import React from 'react';
import { BookData } from './models';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export class Book extends React.Component<{data: BookData}, {}> {

    constructor(props: any) {
        super(props);
        
        //this.state = {book};
      }

    render() {
      return (
        <Card>
            <Image src='https://image.ceneostatic.pl/data/products/50536652/i-huawei-p10-dual-sim-64gb-czarny.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{this.props.data.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{this.props.data.author}</span>
            </Card.Meta>
            <Card.Description>
                ss
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            <div className='ui two buttons'>
          <Button as="a" basic color='green'  href="https://www.google.pl">
              aa22
          </Button>
        </div>
            </Card.Content>
        </Card>
      );
    }
  }