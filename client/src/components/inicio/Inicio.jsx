import ListCard from '../listCard/ListCard';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <section className={styles.inicio}>
            <article>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nam voluptatem reiciendis dolorem ipsa nemo explicabo voluptatibus quasi laudantium delectus molestiae quo nisi eum repellat quae perspiciatis incidunt ab laboriosam soluta eos veniam nobis, omnis ut. Sapiente, voluptates, optio dolor doloribus architecto laboriosam necessitatibus maiores saepe eos consequatur est ipsa voluptatibus modi tenetur consectetur molestias voluptate maxime culpa non totam blanditiis? Ut necessitatibus dignissimos, dolorem aliquid nesciunt, consequatur non impedit nobis culpa tenetur repudiandae voluptas quia soluta aut aliquam ipsa ipsum doloribus dolore obcaecati possimus debitis tempora similique totam? Quam exercitationem dignissimos vero doloribus laborum tempora minima minus nam est.</p>
            </article>
            <ListCard />
        </section>
    )
}

export default Inicio;