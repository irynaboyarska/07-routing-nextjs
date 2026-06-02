import NotePreview from '@/components/NotePreview/NotePreview';
import { Modal } from '@/components/Modal/Modal';

interface NotePreviewModalProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NotePreviewModal({ params }: NotePreviewModalProps) {
  const { id } = await params;

  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
}
