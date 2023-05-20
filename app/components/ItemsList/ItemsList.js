import styles from './itemsList.module.css'

function ItemsList2({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

function ItemsList({ items }) {
  return (
    <div className={styles.container}>
      <title>Items Grid</title>

      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.title}>Items</h1>
        </div>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item._id} className={styles.card}>
              <img src={item.picture} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ItemsList
