import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import path from 'path';

interface SwimCertificateProps {
  swimmerName: string;
  instructorName: string;
  date: string;
  notes: string;
  achievements: string[];
}

// Get absolute paths for images
const publicDir = path.join(process.cwd(), 'public');
const starImagePath = path.join(publicDir, 'images', 'star.png');
const logoWavePath = path.join(publicDir, 'images', 'logo-wave.jpg');

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  border: {
    border: '2px solid #2563eb',
    borderRadius: 10,
    padding: 30,
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    marginBottom: 15,
    color: '#2563eb',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#4b5563',
    textAlign: 'center',
  },
  swimmerName: {
    fontSize: 22,
    marginBottom: 30,
    color: '#1f2937',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  accomplishments: {
    marginTop: 20,
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  column: {
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  accomplishment: {
    fontSize: 12,
    marginBottom: 24,
    color: '#1f2937',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    gap: 6,
  },
  starImage: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  notes: {
    width: '100%',
    minWidth: 200,
    minHeight: 40,
    padding: '15px',
    backgroundColor: '#eeeeee',
    border: '2px solid #e5e7eb', // TEMP: for debugging
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: '90%',
    alignSelf: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  notesText: {
    fontSize: 18,
    color: '#1f2937',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 1.6,
  },
  signature: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  signatureLine: {
    width: '150px',
    borderBottom: '1px solid #1f2937',
    marginBottom: 5,
  },
  signatureText: {
    fontSize: 11,
    color: '#4b5563',
    textAlign: 'right',
  },
  date: {
    fontSize: 11,
    color: '#4b5563',
    textAlign: 'right',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 10,
  },
});

const defaultAchievements = [
  'You can go under water',
  'You can float on your back',
  'You can be safe in the water',
  'You can swim to the edge of the pool',
  'You can swim freestyle',
  'You can swim breaststroke',
  'You can swim backstroke',
  'You can dive into a pool safely',
];

export const SwimCertificate = ({ 
  swimmerName, 
  instructorName = 'Andria McGhee',
  date = new Date().toISOString().split('T')[0],
  notes = '',
  achievements = defaultAchievements 
}: SwimCertificateProps) => {
  // Split achievements into two columns
  const midPoint = Math.ceil(achievements.length / 2);
  const leftColumn = achievements.slice(0, midPoint);
  const rightColumn = achievements.slice(midPoint);

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.border}>
          <Image
            src={logoWavePath}
            style={styles.backgroundImage}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Swimming Achievement Certificate</Text>
            {swimmerName && (
              <Text style={styles.swimmerName}>
                {swimmerName}
              </Text>
            )}
            <Text style={styles.subtitle}>Congratulations on your swimming accomplishments!</Text>
            
            <View style={styles.accomplishments}>
              <View style={styles.column}>
                {leftColumn.map((accomplishment, index) => (
                  <View key={index} style={styles.accomplishment}>
                    <Image src={starImagePath} style={styles.starImage} />
                    <Text style={{ fontSize: 12 }}>{accomplishment}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.column}>
                {rightColumn.map((accomplishment, index) => (
                  <View key={index} style={styles.accomplishment}>
                    <Image src={starImagePath} style={styles.starImage} />
                    <Text style={{ fontSize: 12 }}>{accomplishment}</Text>
                  </View>
                ))}
              </View>
            </View>

            {notes && (
              <View style={styles.notes}>
                <Text style={styles.notesText}>{notes}</Text>
              </View>
            )}

            <View style={styles.signature}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureText}>{instructorName}</Text>
              <Text style={styles.date}>{new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</Text>
            </View>
          </View>
          <Text style={styles.footer}>
            Central Coast Swim • www.centralcoastswim.com
          </Text>
        </View>
      </Page>
    </Document>
  );
}; 