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
import RouteTwoFirstGif from './images/r2_first.gif'
import RouteTwoSecondGif from './images/r2_second.gif'
import RouteTwoThirdGif from './images/r2_third.gif'
import RouteTwoFourthGif from './images/r2_fourth.gif'
import RouteTwoFifthGif from './images/r2_fifth.gif'

interface Props {
    className?: string
    currentImageIdentifier: string
    defaultSelected?: string[]
    nextPubId?: string
    onSelectPub: (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => void
    pubs?: Pub[]
}

interface State {
    defaultActive: boolean
}

export class PubsMap extends React.Component<Props, State> {
    public state: State = {
        defaultActive: true,
    }

    public render() {
        const { pubs, nextPubId, defaultSelected } = this.props
        const { defaultActive } = this.state

        if (!pubs) {
            return null
        }

        return (
            <div className={this.getClassName()}>
                {pubs.map(pub => (
                    <PubMapItem
                        pub={pub}
                        nextPubId={nextPubId}
                        onSelectPub={this.onSelectPub}
                        defaultSelected={defaultActive && defaultSelected}
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
                <Image className={this.getImageClassName('r1')} src={RouteTwoFirstGif}/>
                <Image className={this.getImageClassName('r2')} src={RouteTwoSecondGif}/>
                <Image className={this.getImageClassName('r3')} src={RouteTwoThirdGif}/>
                <Image className={this.getImageClassName('r4')} src={RouteTwoFourthGif}/>
                <Image className={this.getImageClassName('r5')} src={RouteTwoFifthGif}/>
            </div>
        )
    }

    private onSelectPub = (event: React.MouseEvent<HTMLButtonElement>, pubId: string) => {
        const { onSelectPub } = this.props

        this.setState({ defaultActive: false })

        onSelectPub(event, pubId)
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
