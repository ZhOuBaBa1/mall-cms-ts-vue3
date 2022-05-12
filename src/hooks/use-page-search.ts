import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (qureyInfo: any) => {
    pageContentRef.value?.getPageData(qureyInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
