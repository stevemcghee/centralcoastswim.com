import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#ffffff',
  },
  border: {
    border: '2px solid #2563eb',
    borderRadius: 10,
    padding: 40,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#2563eb',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#4b5563',
    textAlign: 'center',
  },
  accomplishments: {
    marginTop: 20,
    width: '100%',
  },
  accomplishment: {
    fontSize: 14,
    marginBottom: 10,
    color: '#1f2937',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12,
  },
});

const accomplishments = [
  'You can go under water',
  'You can float on your back',
  'You can be safe in the water',
  'You can swim to the edge of the pool',
  'You can swim freestyle',
  'You can swim breaststroke',
  'You can swim backstroke',
  'You can dive into a pool safely',
];

export const SwimCertificate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.border}>
        <Text style={styles.title}>Swimming Achievement Certificate</Text>
        <Text style={styles.subtitle}>Congratulations on your swimming accomplishments!</Text>
        
        <View style={styles.accomplishments}>
          {accomplishments.map((accomplishment, index) => (
            <Text key={index} style={styles.accomplishment}>
              ✓ {accomplishment}
            </Text>
          ))}
        </View>

        <Text style={styles.footer}>
          Central Coast Swim • www.centralcoastswim.com
        </Text>
      </View>
    </Page>
  </Document>
); 