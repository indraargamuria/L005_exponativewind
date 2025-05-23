import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type HomepageProps = {
  title: string;
};

export const Homepage = ({ title }: HomepageProps) => {
  const [activeTab, setActiveTab] = useState<'PO' | 'PR'>('PO');

  const dummyPOs = [
    { "id": "PO-001", "requester": "Joshua", "date": "Jan 28", "status": "Approved" },
    { "id": "PO-002", "requester": "Alexa", "date": "Jan 30", "status": "Approved" },
    { "id": "PO-003", "requester": "Amanda", "date": "Feb 16", "status": "Approved" },
    { "id": "PO-004", "requester": "Logan", "date": "Jan 24", "status": "Pending" },
    { "id": "PO-005", "requester": "Kimberly", "date": "Jan 04", "status": "Rejected" },
    { "id": "PO-006", "requester": "Bryan", "date": "Feb 14", "status": "Rejected" },
    { "id": "PO-007", "requester": "Mark", "date": "Feb 02", "status": "Approved" },
    { "id": "PO-008", "requester": "Kathy", "date": "Mar 22", "status": "Pending" },
    { "id": "PO-009", "requester": "Andrea", "date": "Mar 01", "status": "Approved" },
    { "id": "PO-010", "requester": "Kara", "date": "Jan 09", "status": "Pending" },
  ];

  const dummyPRs = [
    { "id": "PR-001", "requester": "Teresa", "date": "Feb 25", "status": "Rejected" },
    { "id": "PR-002", "requester": "Dawn", "date": "Jan 31", "status": "Approved" },
    { "id": "PR-003", "requester": "Jamie", "date": "Jan 05", "status": "Approved" },
    { "id": "PR-004", "requester": "Stacy", "date": "Mar 02", "status": "Approved" },
    { "id": "PR-005", "requester": "Sheila", "date": "Jan 22", "status": "Approved" },
    { "id": "PR-006", "requester": "Caroline", "date": "Jan 05", "status": "Pending" },
    { "id": "PR-007", "requester": "John", "date": "Jan 31", "status": "Approved" },
    { "id": "PR-008", "requester": "Ariana", "date": "Mar 16", "status": "Rejected" },
    { "id": "PR-009", "requester": "James", "date": "Feb 26", "status": "Pending" },
    { "id": "PR-010", "requester": "Stephanie", "date": "Jan 30", "status": "Approved" },
  ];

  const renderTab = (label: 'PO' | 'PR') => (
    <TouchableOpacity
      className={`px-4 py-2 border-b-2 ${activeTab === label ? 'border-blue-600' : 'border-transparent'}`}
      onPress={() => setActiveTab(label)}
    >
      <Text className={`text-lg font-semibold ${activeTab === label ? 'text-blue-600' : 'text-gray-500'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = (item: any) => {
    const statusColors: { [key: string]: string } = {
      'Approved': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Rejected': 'bg-red-100 text-red-700',
    };
    
    return (
      <View key={item.id} className="bg-white rounded-lg px-4 py-3 mb-3 shadow-sm border border-gray-100">
        <Text className="text-xl font-semibold text-gray-800">{item.id}</Text>
        <Text className="text-base text-gray-500">
          {item.requester} • {item.date}
        </Text>
        <Text className={`text-xs font-bold ${statusColors[item.status]} px-3 py-1 w-fit mt-2 rounded-full`}>
          {item.status}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-3">Pending Approval</Text>

      <View className="flex-row mb-4">
        {renderTab('PO')}
        {renderTab('PR')}
      </View>

      <ScrollView className="flex-1">
        {(activeTab === 'PO' ? dummyPOs : dummyPRs).map(renderItem)}
      </ScrollView>
    </SafeAreaView>
  );
};
