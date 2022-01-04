import { Button } from '../button/Button'
import classes from './AllBooksCta.module.scss'

const AllBooksCta = () => {
    return (
        <section className={classes.cta}>
            <div className="container">
                <div className={classes.cta__content}> 
                    <p style={{textAlign: 'center', width: '70%',margin: 'auto'}}>
                        btexst
                    </p>
                    <Button color="white" bg="var(--pri)" >All books</Button>
                </div>
            </div>
        </section>
    )
}

export default AllBooksCta
