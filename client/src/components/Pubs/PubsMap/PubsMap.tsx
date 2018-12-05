import './PubsMap.scss'
import * as React from 'react'
import c from 'classnames'
import { Pub } from '../../../types/Pub'
import { PubMapItem } from './PubMapItem/PubMapItem'
import { Image } from '../../Core/Image/Image'
import FirstGif from './images/first.gif'
import FirstStatic from './images/first_static.jpg'
import SecondGif from './images/second.gif'
import ThirdGif from './images/third.gif'
import FourthGif from './images/fourth.gif'
import FifthGif from './images/fifth.gif'
import FifthStatic from './images/fifth_static.jpg'

interface Props {
    className?: string
    pubs?: Pub[]
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
    clickState: string
}

export class PubsMap extends React.Component<Props> {
    public render() {
        const { pubs, onSelectPub, clickState } = this.props

        if (!pubs) {
            return null
        }

        return (
            <div className={this.getClassName()}>
                {pubs.map(pub => (
                    <PubMapItem
                        pub={pub}
                        onSelectPub={onSelectPub}
                        key={pub.full_id}
                    />
                ))}
                <Image className={`krt-PubsMap__1 ${clickState === '1' ? 'krt-PubsMap__1--active' : ''}`} src={FirstGif}/>
                <Image className={`krt-PubsMap__1s ${clickState === '1s' ? 'krt-PubsMap__1s--active' : ''}`} src={FirstStatic}/>
                <Image className={`krt-PubsMap__2 ${clickState === '2' ? 'krt-PubsMap__2--active' : ''}`} src={SecondGif}/>
                <Image className={`krt-PubsMap__3 ${clickState === '3' ? 'krt-PubsMap__3--active' : ''}`} src={ThirdGif}/>
                <Image className={`krt-PubsMap__4 ${clickState === '4' ? 'krt-PubsMap__4--active' : ''}`} src={FourthGif}/>
                <Image className={`krt-PubsMap__5 ${clickState === '5' ? 'krt-PubsMap__5--active' : ''}`} src={FifthGif}/>
                <Image className={`krt-PubsMap__5s ${clickState === '5s' ? 'krt-PubsMap__5s--active' : ''}`} src={FifthStatic}/>
            </div>
        )
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-PubsMap', {}, className)
    }
}
