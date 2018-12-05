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
    currentImageIdentifier: string
    nextPubId?: string
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
    pubs?: Pub[]
}

export class PubsMap extends React.Component<Props> {
    public render() {
        const { pubs, onSelectPub, currentImageIdentifier, nextPubId } = this.props

        if (!pubs) {
            return null
        }

        return (
            <div className={this.getClassName()}>
                {pubs.map(pub => (
                    <PubMapItem
                        pub={pub}
                        nextPubId={nextPubId}
                        onSelectPub={onSelectPub}
                        key={pub.full_id}
                    />
                ))}
                <Image className={this.getImageClassName('1')} src={FirstGif}/>
                <Image className={this.getImageClassName('1s')} src={FirstStatic}/>
                <Image className={this.getImageClassName('2')} src={SecondGif}/>
                <Image className={this.getImageClassName('3')} src={ThirdGif}/>
                <Image className={this.getImageClassName('4')} src={FourthGif}/>
                <Image className={this.getImageClassName('5')} src={FifthGif}/>
                <Image className={this.getImageClassName('5s')} src={FifthStatic}/>
            </div>
        )
    }

    private getImageClassName = (identifier: string) => {
        const { currentImageIdentifier } = this.props

        const classNameBase = `krt-PubsMap__${identifier}`
        const shouldHaveActiveClass = currentImageIdentifier === identifier
        const modifierClassName = `${shouldHaveActiveClass ? `${classNameBase}--active` : ''}`

        return `${classNameBase} ${modifierClassName}`
    }

    private getClassName = () => {
        const { className } = this.props

        return c('krt-PubsMap', {}, className)
    }
}
