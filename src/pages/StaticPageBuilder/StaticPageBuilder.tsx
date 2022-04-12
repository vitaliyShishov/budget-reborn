import { useEffect, Dispatch, SetStateAction, useState } from 'react'
import request from '../../utils/api-call'
import { useParams } from 'react-router-dom'
import { parseComponents } from '../../utils/dataParsing'
import Section from '@components/Section'

type PageProps = {
  setHideLayouts: Dispatch<SetStateAction<Boolean>>
}

const StaticPageBuilder = ({ setHideLayouts }: PageProps) => {
  const { slug } = useParams()
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    setHideLayouts(false)
  }, [])

  useEffect(() => {
    request(
      {
        url: `${import.meta.env.VITE_SERVER_URL}/api/articles`,
        method: 'GET',
        params: { filters: { seo_url: { $eq: slug } } }
      },
      true
    ).then(response => setPageData(parseComponents(response.pop())))
  }, [])

  return pageData ? (
    <>
      {pageData.components.map((section: any, i: number) => {
        return <Section key={i} {...section}></Section>
      })}
    </>
  ) : null
}

export default StaticPageBuilder
