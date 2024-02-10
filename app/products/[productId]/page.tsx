export default function ProductDetailPage({ params }: { params: DictionaryType }) {
  return <h1>Product detail page, product {JSON.stringify(params)}</h1>
}
