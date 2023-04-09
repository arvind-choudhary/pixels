import { Chip } from '@/components/chip';
import { CurateProductsList } from '@/components/curatePhotoList';
import { Search } from '@/components/search';
import { CuratePhotosContextProvider } from '@/contextApi/curatePhotosContext'
import { getCuratedPhotosList } from '@/services/photos.services';

export default async function Home() {

  const photosData = await getCuratedPhotosList();

  return (
    <CuratePhotosContextProvider photosData={photosData}>
      <main className='container mx-auto p-4'>

        <section>
          <Search />
        </section>

        <Chip closeIcon={true} />

        <section className='columns-5 gap-3 space-y-3'>
          <CurateProductsList />
        </section>
      </main>
    </CuratePhotosContextProvider>
  )
}
